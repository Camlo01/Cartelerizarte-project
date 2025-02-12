import { View, StyleSheet, Text, Image } from "@react-pdf/renderer"

import Icon2 from '/assets/icons/icon-2.png'

export default function Title() {

    const deepYellowColor = '#CA7500'
    const lightYellowColor = '#FFD77B'

    const grayAndOrange = '#c4b997'

    const ligthtGray = '#686868'
    const darknessGray = '#555555'

    const styles = StyleSheet.create({
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            height: '75px',
            fontWeight: 600,
            backgroundColor: ligthtGray
        },
        titleIconContainer: { width: '120px', justifyContent: 'center', backgroundColor: lightYellowColor },
        titleIcon: { width: '75px', margin: '0 auto' },

        titleTextContainer: {
            // backgroundColor: 'cyan',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        titleText: {
            width: '370px',
            fontWeight: 600,
            fontSize: '26px',
            color: 'white',
            fontFamily: 'Montserrat',
        },

        // SubColumns
        subtitleContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        subtitleElement: {
            backgroundColor: deepYellowColor,
            color: 'white',
            padding: '5px 5px 10px',
            fontSize: '14px',
            textAlign: 'center',
            paddingBottom: '10px'
        },

        // Individual Elements
        subEDia: {
            padding: '5px 21px 5px 60px',
            borderRight: 2.5, borderColor: '#9d4c04'
        },
        subEOrador: {
            padding: '5px 30px 5px 30px',
            borderRight: 2, borderColor: grayAndOrange
        },
        subECongre: {
            padding: '5px 18px 5px 18px',
            borderRight: 2, borderColor: grayAndOrange
        },
        subEBosquejo: {
            padding: '5px 5px 5px 5px',
            borderRight: 2, borderColor: grayAndOrange
        },
        subETema: {
            padding: '5px 124px 5px 124px',
            borderRight: 2, borderColor: grayAndOrange
        },
        subEContacto: {
            padding: '5px 0px 5px 0px',
            width: '110px'
        },
        // subEContactoText: {
        // }
    })

    return (
        <View style={{ display: 'flex' }}>

            <View style={styles.titleContainer}>

                <View style={styles.titleIconContainer}>
                    <Image style={styles.titleIcon} src={Icon2}></Image>
                </View>

                <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText} >Programación Conferencias</Text>
                </View>
            </View>

            <View style={styles.subtitleContainer}>

                <View style={[styles.subtitleElement, styles.subEDia]}>
                    <Text>Día</Text>
                </View>
                <View style={[styles.subtitleElement, styles.subEOrador]}>
                    <Text>Orador</Text>
                </View>
                <View style={[styles.subtitleElement, styles.subECongre]}>
                    <Text>Congregación</Text>
                </View>
                <View style={[styles.subtitleElement, styles.subEBosquejo]}>
                    <Text>Bosquejo</Text>
                </View>
                <View style={[styles.subtitleElement, styles.subETema]}>
                    <Text>Tema</Text>
                </View>
                <View style={[styles.subtitleElement, styles.subEContacto]}>
                    <Text style={styles.subEContactoText}>Contacto</Text>
                </View>
            </View>
        </View >
    )
}