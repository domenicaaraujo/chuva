import styled from "styled-components"

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    div{
        width: 67vw;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                width: 90vw;
        }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 90vw;
        }
       
        section{
            border: solid 1px #ECECEC;
            border-radius: 3px 3px 0px 0px;
            background-color:#FDF1EB;

            h2{
                color: #4E4E4E;
                margin-left: 1em;

                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    font-size: 19px;
                }
            }
        }
        
        article{
            position: static;
            
            p{
                @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                font-size: 15px;
                font-style: normal;
                letter-spacing: 0.02em;
            }

        }
        }
    }
`