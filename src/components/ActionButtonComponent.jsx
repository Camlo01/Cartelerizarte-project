export default function ActionButtonComponent({ event, text }) {
    return (
        <>
            <style>
                {`
                .load-button {
                    font-family: 'Noto Sans Display';
                    font-weigth: 500;
                    display: block;
                    width: 230px;
                    height: 60px;
                    font-size: 1.2rem;
                    font-weight: 800;
                    margin: 40px auto 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background-color: #062859;
                    border: none;
                    color: #fff;
                    box-shadow: -2px 4px 9px 0px rgba(0,0,0,0.75);
                    -webkit-box-shadow: -2px 4px 9px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: -2px 4px 9px 0px rgba(0,0,0,0.75);
                    border: 4px solid rgb(19, 72, 146);
                }

                .load-button:hover {
                border: 4px solid rgb(120, 175, 252);
                background-color:rgb(34, 121, 244);
                padding-bottom: 2px;
                box-shadow: 2px 9px 14px -1px rgba(0,0,0,0.75);
                -webkit-box-shadow: 2px 9px 14px -1px rgba(0,0,0,0.75);
                -moz-box-shadow: 2px 9px 14px -1px rgba(0,0,0,0.75);
                }
                `}
            </style>

            <button className="load-button" onClick={event}>
                {text}
            </button>
        </>
    );
}