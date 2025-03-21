import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import Title from './Components/title';

// import ImageBackground from '/assets/background.png'
import { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../../utils/StringUtils';
import { fileNameFormatted } from '../../../utils/ScheduleUtils';

import registerFonts from '../../../utils/FontLoader';

export default function AtalayaPDF({ schedule, peopleScheduled, setFileName }) {

    const deepYellowColor = '#CA7500'
    let counter = 0

    useEffect(() => {
        setFileName(fileNameFormatted("Presidente & Lector", schedule))
    }, [schedule])

    registerFonts()

    return (
        <Document title='Programación Atalaya y Lector'>
            <Page
                size="LETTER"
                orientation="portrait" >

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
                            <View style={{ height: '78%', width: '70%', margin: '0 auto' }}>
                                {schedule.map((month, i) => (
                                    <View style={{ height: '100%', display: 'flex', flexDirection: 'row', borderBottom: '5px', borderColor: deepYellowColor }} key={i}>
                                        <View style={{
                                            width: '120px', height: '100%',
                                        }}>

                                            <View style={{ transform: 'rotate(270deg)', margin: "auto", width: '250px' }}>
                                                <Text style={{
                                                    fontSize: '28px',
                                                    color: deepYellowColor,
                                                    letterSpacing: '2px',
                                                    fontFamily: 'kohinoor-latin',
                                                    fontWeight: 600,
                                                    textAlign: 'center',
                                                    marginBottom: '145px',

                                                }}>
                                                    {capitalizeFirstLetter(month.month)}
                                                </Text>

                                            </View>
                                        </View>
                                        <View style={{}}>

                                            {month.day.map((date, i) => {

                                                const contentScheduled = peopleScheduled[counter]
                                                counter++

                                                return (
                                                    <View key={i} style={{
                                                        borderBottom: '2',
                                                        borderColor: '#A8A8A8',
                                                        width: '100%',
                                                        height: '100%',
                                                        textAlign: 'center',
                                                        padding: 0,
                                                        margin: 0,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'stretch',
                                                        justifyContent: 'center',
                                                        backgroundColor: 'transparent',
                                                    }}>
                                                        <View style={{
                                                            width: 38, margin: 'auto', height: '100%', textAlign: 'center',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            borderRight: 3, borderColor: deepYellowColor,
                                                        }}>
                                                            <Text style={{
                                                                display: 'block', fontSize: 20, fontFamily: 'Avenir-Next', fontWeight: 600, marginTop: '4px',
                                                                color: '#555555' //i % 2 === 0 ? 'black' : deepYellowColor
                                                            }}>
                                                                {date}
                                                            </Text>
                                                        </View>


                                                        <View style={{ display: 'flex', width: '100%' }}>
                                                            {
                                                                (contentScheduled != undefined) ?
                                                                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', fontSize: '14px', textAlign: 'center', fontFamily: 'Avenir-Next', fontWeight: 500, color: '#555555' }}>

                                                                        {/* First Column */}
                                                                        <View style={{
                                                                            margin: "auto", flex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                                                                            alignItems: 'center', justifyContent: 'center', borderRight: 3, borderColor: '#A8A8A8', textAlign: 'justify'
                                                                        }}>
                                                                            <View style={{ margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                                                <Text style={{ marginTop: '4px', }}>{contentScheduled.presidente}</Text>
                                                                            </View>
                                                                        </View>

                                                                        {/* Second Column */}
                                                                        <View style={{
                                                                            margin: "auto", flex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                                                                            alignItems: 'center', justifyContent: 'center',
                                                                        }}>
                                                                            <View style={{ margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                                                <Text style={{ marginTop: '4px', }}>{contentScheduled.lector}</Text>
                                                                            </View>
                                                                        </View>

                                                                    </View>
                                                                    :
                                                                    <View style={{ margin: "auto", width: '100%' }}>
                                                                        <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px', color: "black", fontSize: '14px' }}>- Vacío -</Text>
                                                                    </View>
                                                            }
                                                        </View>





                                                    </View>
                                                )

                                            })}


                                        </View>
                                    </View>
                                ))}
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
                                <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 700, marginTop: '2px', fontSize: '30px', color: '#212226', width: '430px', margin: '0 auto', paddingBottom: 90 }}>¡Genera el cronograma!</Text>
                            </View>
                        }

                    </View>
                </View>


            </Page>
        </Document >
    )
}