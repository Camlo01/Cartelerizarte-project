import { View, StyleSheet, Text, Image } from '@react-pdf/renderer'

import Icon2 from '/assets/icons/icon-2.png'

export default function title() {

    const deepYellowColor = '#CA7500'
    const lightYellowColor = '#FFD77B'

    const ligthtGray = '#686868'
    const darknessGray = '#555555'

    const styles = StyleSheet.create({
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '75px',
            fontWeight: 600,
            margin: '0 auto',
            backgroundColor: 'red',
        },
        titleIconContainer: {
            width: '115px',
            backgroundColor: lightYellowColor,
            alignItems: 'center',
            justifyContent: 'center'
        },
        titleIcon: {
            width: '75px'
        },
        titleColumns: {
            display: 'flex',
            flex: 'auto',
            flexDirection: 'row',
            color: 'white',
            fontSize: '22px',
            fontWeight: '600'
        },
        titleColumnsElement: {
            width: '150px',
            justifyContent: 'center',
            alignItems: 'center'
        },
        titleColumnsElementFirst: { backgroundColor: ligthtGray },
        titleColumnsElementSecond: { backgroundColor: darknessGray },
    })


    return (
        <View style={{ display: 'flex' }}>

            {/* Content */}
            <View style={styles.titleContainer}>
                {/* Icon container */}
                <View style={styles.titleIconContainer}>
                    <Image style={styles.titleIcon} src={Icon2} />
                </View >

                {/* Columns */}
                <View style={styles.titleColumns}>

                    <View style={[styles.titleColumnsElement, styles.titleColumnsElementFirst]} >
                        <Text>Presidente</Text>
                    </View>
                    <View style={[styles.titleColumnsElement, styles.titleColumnsElementSecond]} >
                        <Text>Lector</Text>
                    </View>

                </View>
            </View >

            {/* Divisor line */}
            <View style={{
                display: 'block',
                width: '69%',
                height: '5px',
                margin: '0 auto',
                backgroundColor: deepYellowColor,
                borderRadius: '10px'
            }} />

        </View>

    )

}