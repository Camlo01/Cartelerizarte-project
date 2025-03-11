import { View, StyleSheet, Text, Image } from '@react-pdf/renderer'

import Icon3 from '/assets/icons/icon-3.png'

export default function Title() {

    const ligthBlueColor = '#92B2D9'
    const deepBlueColor = '#7D9FCE'
    const grayColor = 'gray'

    const styles = StyleSheet.create({
        titleContainer: {
            display: "flex",
            flexDirection: 'row',
            height: 80
        },
        iconContainer: {
            width: '187px',
            backgroundColor: ligthBlueColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: { height: 74, padding: 12 },
        titleColumn: {
            width: '100%', backgroundColor: grayColor, displa: 'flex',
        },
        titleBody: { display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' },
        titleText: { color: 'white', fontFamily: 'Montserrat', fontSize: '38px', paddingRight: '100px' }
    })

    return (
        <View style={{ display: 'flex' }}>

            {/* Content */}
            <View style={styles.titleContainer}>
                {/* Icon container */}
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} src={Icon3} />
                </View>

                {/* Title */}
                <View style={styles.titleColumn}>
                    <View style={styles.titleBody}>
                        <Text style={styles.titleText}>Limpieza</Text>
                    </View>
                </View>
            </View>

            {/* Divisor blue line */}
            <View style={{
                display: 'block',
                width: '100%',
                height: '10px',
                margin: '0 auto',
                backgroundColor: deepBlueColor,
            }} />

        </View>
    )
}