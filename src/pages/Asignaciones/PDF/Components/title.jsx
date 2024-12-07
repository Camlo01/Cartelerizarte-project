import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";

import Icon from '/assets/icons/icon-1.png'

export default function Title() {

    const styles = StyleSheet.create({
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            // height: '130px' // ORIGINAL
            height: '75px',
            fontFamily: 'Montserrat',
            fontWeight: 600
        },
        titleIconContainer: {
            width: '115px',
            // height: '110px',
            backgroundColor: "rgb(229,167,172)",
            alignItems: 'center',
            justifyContent: 'center'
        },
        titleIcon: {
            width: '75px'
            // backgroundColor: 'red'
        }
        ,
        titleColumns: {
            display: 'flex',
            // height: '115px',
            flex: 'auto',
            flexDirection: 'row',
            color: 'white',
            fontSize: '22px',
            fontWeight: '800'
        },
        titleColumnsElement: { width: '33.34%', justifyContent: 'center', alignItems: 'center' },
        titleColumnsElementFirst: { backgroundColor: 'rgb(75,78,74)' },
        titleColumnsElementSecond: { backgroundColor: 'rgb(60,62,58)' },
        titleColumnsElementThird: { backgroundColor: 'rgb(46,47,45)' },
        titleColumnsIndicator: {
            display: 'block',
            position: 'absolute',
            // fontSize: '23px',
            backgroundColor: 'rgb(167,33,45)',
            padding: '4px 20px',
            // top: '80px', // ORIGINAL
            top: '45px',
            width: '50%',
            left: '50%',
            borderRadius: "0px",
            fontWeight: 600, 
        },
        textTitleIndicator: {
            margin: '0px auto',
            fontSize: '13px',
        }
    });

    return (
        <View style={{ display: 'flex' }}>
            <View style={styles.titleContainer} >
                {/* Icon Container */}
                <View style={styles.titleIconContainer}>
                    {/* <Text>Icon</Text> Icon Image */}
                    <Image style={styles.titleIcon} src={Icon}> </Image>
                </View>

                {/* Columns Titles */}
                <View style={styles.titleColumns}>
                    <View style={[styles.titleColumnsElement, styles.titleColumnsElementFirst]}>
                        <Text>Acomodadores</Text>
                        <View style={styles.titleColumnsIndicator}>
                            <Text style={styles.textTitleIndicator}>Seguridad</Text>
                        </View>
                    </View>
                    <View style={[styles.titleColumnsElement, styles.titleColumnsElementSecond]}>
                        <Text>Micrófonos</Text>
                        <View style={styles.titleColumnsIndicator}>
                            <Text style={styles.textTitleIndicator}>Plataforma</Text>
                        </View>
                    </View>
                    <View style={[styles.titleColumnsElement, styles.titleColumnsElementThird]}>
                        <Text>Audio y Video</Text>
                    </View>
                </View>

            </View >
            <View style={{ display: 'block', width: '100%', height: "5px", backgroundColor: "rgb(167,33,45)" }} />{/* Divisor Line */}
        </View>
    )
}
