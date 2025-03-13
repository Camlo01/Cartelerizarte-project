import { Page, Text, View, Document, Image } from "@react-pdf/renderer"
import Title from './components/Title'

// import ImageBackground from '/assets/background.png'
import { useEffect } from "react"

import registerFonts from '../../../utils/FontLoader.js'
import { capitalizeFirstLetter, styleOradorString, styleTemaString } from '../../../utils/StringUtils';
import { fileNameFormatted } from "../../../utils/ScheduleUtils";

export default function ConferenciasPDF({ schedule, peopleScheduled, setFileName }) {

    const deepYellowColor = '#CA7500'
    const grayLinesColor = '#C7CCD1'

    let counter = 0

    useEffect(() => {
        setFileName(fileNameFormatted("Conferencias", schedule))
    }, [schedule])

    registerFonts()

    return (
        <Document title='Programación Conferencistas' >
            <Page
                size="LETTER"
                orientation="landscape" >

                <View>

                    {/* <Image src={ImageBackground} style={{ height: '100%', width: '100%' }} /> */}

                    <View style={{
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100vh',
                        width: '100%'
                    }}>
                        <Title />

                        {(schedule.length > 0) ?
                            <View style={{ height: '100%' }}>
                                {schedule.map((month, i) =>
                                    <View key={i}
                                        style={{
                                            display: "block",
                                            flexDirection: 'row',
                                            height: '100%',
                                            padding: 0,
                                            margin: 0,
                                            borderBottom: 4,
                                            borderColor: deepYellowColor
                                        }
                                        }>
                                        <View style={{
                                            width: '80px',
                                            // backgroundColor: 'white',
                                            display: 'flex'
                                        }}>
                                            <View style={{
                                                display: 'block',
                                                position: 'aboslute',
                                                width: '230px',
                                                transform: 'rotate(270deg)',
                                                margin: 'auto',
                                                paddingBottom: '160px',
                                                textAlign: 'center',
                                            }}>
                                                <Text style={{
                                                    fontSize: '31px',
                                                    color: deepYellowColor,
                                                    letterSpacing: '2px',
                                                    fontFamily: 'kohinoor-latin',
                                                    fontWeight: 600,
                                                    marginTop: '4px'
                                                }}>{capitalizeFirstLetter(month.month)}</Text>
                                            </View>
                                        </View>
                                        <View >

                                            {month.day.map((date, i) => {

                                                const contentScheduled = peopleScheduled[counter]
                                                counter++

                                                return (
                                                    <View key={i} style={{
                                                        borderBottom: '1.5',
                                                        borderColor: grayLinesColor,
                                                        width: '100%',
                                                        height: '100%',
                                                        textAlign: 'center',
                                                        padding: 0,
                                                        margin: 0,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'stretch',
                                                        justifyContent: 'center',
                                                        backgroundColor: 'white',
                                                    }} >
                                                        <View style={{
                                                            width: 35, margin: 'auto', height: '100%', textAlign: 'center',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            borderRight: 3, borderColor: deepYellowColor
                                                        }}>
                                                            <Text style={{
                                                                display: 'block', fontSize: 20, fontFamily: 'Avenir-Next', fontWeight: 600, marginTop: '4px',
                                                                color: 'black'
                                                            }}>
                                                                {date}
                                                            </Text>
                                                        </View>
                                                        <View style={{ display: 'flex', width: '100%' }}>
                                                            {
                                                                (contentScheduled != undefined) ?

                                                                    <ContentOfDate content={contentScheduled} />

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
                                )}
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
                                <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 700, fontSize: '36px', color: '#212226', width: '430px', margin: '0 auto', paddingBottom: 25 }}>¡Genera el cronograma!</Text>
                            </View>
                        }

                    </View>

                </View>


            </Page>
        </Document >
    )

}

function ContentOfDate({ content }) {

    const grayLinesColor = '#C7CCD1'

    const option = content.select

    if (option === 'conferencia' || option === undefined) {

        return (
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', textAlign: 'center', fontSize: '14px' }}>

                {/* First Column */}
                <View style={{
                    width: '106px', display: "flex", alignItems: "center", justifyContent: "center", padding: '0 5px', borderRight: 2.5, borderColor: grayLinesColor
                }}>
                    <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px' }}>{styleOradorString(content.orador)}</Text>
                </View>

                <View style={{
                    width: '128px', display: "flex", alignItems: "center", justifyContent: "center", borderRight: 2.5, borderColor: grayLinesColor
                }}>
                    <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px' }}>{content.congregacion}</Text>
                </View>

                <View style={{
                    width: '71px', display: "flex", alignItems: "center", justifyContent: "center", borderRight: 2.5, borderColor: grayLinesColor
                }}>
                    <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px' }}>{content.bosquejo}</Text>
                </View>

                <View style={{
                    width: '277px', display: "flex", alignItems: "center", justifyContent: "center", borderRight: 2.5, borderColor: grayLinesColor, padding: '0 10px'
                }}>
                    <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px' }}>{styleTemaString(content.tema)}</Text>
                </View>

                <View style={{ width: '108px', display: "flex", alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ fontFamily: 'Avenir-Next', fontWeight: 500, marginTop: '2px' }}>{content.contacto}</Text>
                </View>

            </View>
        )
    }

    let message;

    if (option === 'asamblea') message = 'Día de Asamblea'
    if (option === 'visita') message = 'Visita Superintendente de Circuito'
    if (option === 'conmemoracion') message = 'Día de Conmemoración'
    if (option === 'especial1') message = 'Discurso con Representate De La Central Mundial'
    if (option === 'especial2') message = 'Reunión Especial'
    if (option === 'especial3') message = 'Discurso Especial'

    return (
        <View style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Avenir-Next', fontSize: '20px', fontWeight: 600, paddingRight: '0px', color: "#CA7500", marginTop: '4px' }}>{message}</Text>
        </View>
    )
}