import { Font } from "@react-pdf/renderer"

/**
 * Only TTF y WOFF font types are supported
 */
const registerFonts = () => {

    // Register the Montserrat font
    // Font.register({
    //     family: "Montserrat",
    //     fonts: [
    //         { src: "/assets/Fonts/Montserrat/Montserrat-Medium.ttf", fontWeight: 500 },
    //         { src: "/assets/Fonts/Montserrat/Montserrat-SemiBold.ttf", fontWeight: 600 },
    //         { src: "/assets/Fonts/Montserrat/Montserrat-Bold.ttf", fontWeight: 700 },
    //     ],
    // });

    // Registrer the Avenir Next font
    Font.register({
        family: "Avenir-Next",
        fonts: [
            { src: "/assets/Fonts/avenir-next/AvenirNextLTPro-Regular.ttf", fontWeight: 500 },
            { src: "/assets/Fonts/avenir-next/AvenirNextLTPro-Demi.ttf", fontWeight: 600 },
            { src: "/assets/Fonts/avenir-next/AvenirNextLTPro-Bold.ttf", fontWeight: 700 },
        ],
    });


    // Register the Kohinoor Latin font
    Font.register({
        family: "kohinoor-latin",
        fonts: [
            { src: "/assets/Fonts/kohinoor-latin/KohinoorLatin-Medium.ttf", fontWeight: 500 },
            { src: "/assets/Fonts/kohinoor-latin/KohinoorLatin-Demi.ttf", fontWeight: 600 },
            { src: "/assets/Fonts/kohinoor-latin/KohinoorLatin-Bold.ttf", fontWeight: 700 },
        ]
    })

}

export default registerFonts;