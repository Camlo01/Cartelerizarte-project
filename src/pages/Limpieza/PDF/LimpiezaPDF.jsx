import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import Title from './Components/title';

// import ImageBackground from '/assets/background.png'
import splitIntoEqualsGroups from '../../../utils/ArrayUtils';
import { useEffect, useState } from 'react';

import registerFonts from '../../../utils/FontLoader.js'

const ligthBlueColor = '#92b2d9'
const darkBlueColor = '#7d9fce'

export default function LimpiezaPDF({ schedule, setFileName }) {

    const [scheduleGroups, setScheduleGroups] = useState([])

    useEffect(() => {
        setScheduleGroups(splitIntoEqualsGroups(schedule, 3))
        setFileName("Programación Limpieza")
    }, [schedule])

    registerFonts()

    return (
        <Document title='Programación Limpieza'>
            <Page
                size="LETTER"
                orientation='landscape'
            >
                <View>

                    {/* <Image src={ImageBackground} style={{ height: '100%', width: '100%' }} /> */}

                    {/* Principal View */}
                    <View
                        style={{
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: "100vh",
                            width: '100%'
                        }}
                    >
                        <Title />

                        {(schedule.length > 0) ?
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                height: "100%",
                            }}>
                                {scheduleGroups.map((column, index) => {
                                    return columnViewDates(column, index)
                                })}
                            </View>
                            :
                            <View
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 700, fontSize: '36px', color: '#212226', width: '430px', margin: '0 auto', paddingBottom: 40 }}>¡Genera el cronograma!</Text>
                            </View>
                        }
                    </View>
                </View>
            </Page>
        </Document>
    )
}

function columnViewDates(groupsOfDates, index) {
    return (
        <View style={{
            display: 'flex',
            width: "230px",
            height: "380px",
            marginTop: '-25px'
        }} key={index} >
            {groupsOfDates.map((date, index) => (rowDate(date, index)))}
        </View>
    )
}

function rowDate(date, index) {

    const textSize = '20px'
    const secondTextSize = '18px'
    const NumbSize = '23px'

    const textColor = 'rgb(81,78,80)'
    const grayLineColor = 'rgb(127, 127, 127)'

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottom: '1.4px',
            borderColor: grayLineColor,
            color: textColor
        }} key={index} >
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, fontSize: textSize, letterSpacing: '-1px', marginRight: '5px', marginTop: '6px' }}>{date.date.month}</Text>
                <Text style={{ fontFamily: 'Avenir-Next', fontSize: NumbSize, marginTop: '5px' }}>{date.date.day}</Text>
            </View>
            <View style={{ width: '3px', height: '45px', margin: '0 5px', backgroundColor: darkBlueColor, }} />{/* Separator line */}
            <View style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', width: '85px'
            }}>
                <Text style={{ fontSize: secondTextSize, fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '5px' }}> Grupo</Text>
                <Text style={{ fontFamily: 'Avenir-Next', fontSize: NumbSize, marginTop: '8px' }}> {date.group} </Text>
            </View>
        </View >
    )
}

