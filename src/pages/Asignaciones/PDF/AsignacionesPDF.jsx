import { Page, Text, View, Document, Image, Font } from '@react-pdf/renderer';
import Title from './Components/title';

// import ImageBackground from '/assets/background.png'
import { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../../utils/StringUtils';
import { fileNameFormatted } from '../../../utils/ScheduleUtils';

export default function AsignacionesPDF({ schedule, peopleScheduled, setFileName }) {

    const deepRedColor = '#a7212d'
    let counter = 0

    useEffect(() => {
        setFileName(fileNameFormatted("Asignaciones", schedule))
    }, [schedule])

    // only TTF and WOFF font are supported
    Font.register({
        family: 'Montserrat',
        fonts: [
            {
                src: '/assets/Fonts/Montserrat/Montserrat-Medium.ttf',
                fontWeight: 500,
            },
            {
                src: 'assets/Fonts/Montserrat/Montserrat-SemiBold.ttf',
                fontWeight: 600
            },
            {
                src: '/assets/Fonts/Montserrat/Montserrat-Bold.ttf',
                fontWeight: 700,
            },
        ],
    });

    return (
        <Document title='Programación Asignaciones'>
            <Page
                size="LETTER"
                orientation="landscape" >
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
                        < Title />
                        {(schedule.length > 0) ?
                            <View style={{ height: '100%' }}>
                                {schedule.map((month, i) => (
                                    <View key={i}
                                        style={{
                                            display: "block",
                                            flexDirection: 'row',
                                            // height: '100%',
                                            padding: 0,
                                            margin: 0,
                                            borderBottom: 4,
                                            borderColor: deepRedColor
                                        }
                                        }>
                                        <View style={{
                                            width: '75px',
                                            // backgroundColor: 'white',
                                            display: 'flex'
                                        }}>
                                            <View style={{
                                                // transform: "rotate(270deg)",
                                                display: 'block',
                                                position: 'aboslute',
                                                width: '230px',
                                                // margin: '130px 0 0 -80.5px',
                                                transform: 'rotate(270deg)',
                                                margin: 'auto',
                                                paddingBottom: '160px',
                                                textAlign: 'center',
                                            }}>
                                                <Text style={{
                                                    fontSize: '28px',
                                                    color: deepRedColor,
                                                    letterSpacing: '2px',
                                                    fontFamily: 'Montserrat',
                                                    fontWeight: 600
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
                                                        borderColor: deepRedColor,
                                                        width: '100%',
                                                        height: '100%',
                                                        textAlign: 'center',
                                                        padding: 0,
                                                        margin: 0,
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'stretch',
                                                        justifyContent: 'center',
                                                        backgroundColor: i % 2 === 0 ? '#F7E4E4' : 'white',
                                                    }} >
                                                        <View style={{
                                                            width: 38, margin: 'auto', height: '100%', textAlign: 'center',
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            borderRight: 3, borderColor: deepRedColor,
                                                        }}>
                                                            <Text style={{
                                                                display: 'block', fontSize: 18, fontFamily: 'Montserrat', fontWeight: 600,
                                                                color: i % 2 === 0 ? 'black' : deepRedColor
                                                            }}>
                                                                {date}
                                                            </Text>
                                                        </View>
                                                        <View style={{ display: 'flex', width: '100%' }}>
                                                            {
                                                                (contentScheduled != undefined) ?
                                                                    <View style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', fontSize: '10px', textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 500 }}>

                                                                        {/* First Column */}
                                                                        <View style={{
                                                                            margin: "auto", flex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                                                                            alignItems: 'center', justifyContent: 'center', borderRight: 3, borderColor: deepRedColor,
                                                                        }}>
                                                                            <View style={{ margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                                                <Text style={{}} >{contentScheduled.acomodadores1}</Text>
                                                                                <Text style={{}}>{contentScheduled.acomodadores2}</Text>
                                                                            </View>
                                                                            <View style={{
                                                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                                                margin: 'auto', width: '100%', height: '100%',
                                                                                borderLeft: 3, borderColor: '#a7212d'
                                                                            }}>
                                                                                <Text style={{}}>{contentScheduled.seguridad}</Text>
                                                                            </View>
                                                                        </View>

                                                                        {/* Second Column */}
                                                                        <View style={{
                                                                            margin: "auto", flex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                                                                            alignItems: 'center', justifyContent: 'center', borderRight: 3, borderColor: deepRedColor,
                                                                        }}>
                                                                            <View style={{ margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                                                                <Text>{contentScheduled.microfonos1}</Text>
                                                                                <Text>{contentScheduled.microfonos2}</Text>
                                                                            </View>
                                                                            <View style={{
                                                                                margin: 'auto', width: '100%', height: '100%',
                                                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                                                borderLeft: 3, borderColor: '#a7212d'
                                                                            }}>
                                                                                <Text style={{ textAlign: 'center' }}>{contentScheduled.plataforma}</Text>
                                                                            </View>
                                                                        </View>

                                                                        {/* Third Column */}

                                                                        <View style={{
                                                                            margin: "auto", flex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'row',
                                                                            alignItems: 'center', justifyContent: 'center',
                                                                        }}>
                                                                            <View style={{ margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Text>{contentScheduled.audioVideo1}</Text></View>
                                                                            <View style={{
                                                                                margin: 'auto', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                                                borderLeft: 3, borderColor: '#a7212d'
                                                                            }}><Text>{contentScheduled.audioVideo2}</Text></View>
                                                                        </View>

                                                                    </View>
                                                                    :
                                                                    <View style={{ margin: "auto", width: '100%' }}>
                                                                        <Text style={{ color: "black", fontSize: '14px', fontFamily: 'Helvetica' }}>- Carga el contenido de esta fecha -</Text>
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
                            : (
                                <View
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // padding: '25% 0 0 0',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center'
                                        // backgroundColor: '#09397D'
                                    }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 700,
                                        color: '#212226',
                                        margin: '0 auto',
                                        width: '530px',
                                        paddingBottom: '20px'

                                    }}>¡Genera el cronograma!</Text>
                                </View>
                            )
                        }
                    </View>
                </View>

            </Page>
        </Document >
    );
};

