import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

function Titulo(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["000"]};
          font-size: 24px;
          font-weight: 600;
          fontFamily:'montserrat, cursive'
        }
      `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Olá, quem bom que voltou!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage
export default function PaginaInicial() {
  // const username = 'omariosouto';
  const [username, setUsername] = React.useState("marioli99");
  const roteamento = useRouter();
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: 'rgba(0,0,0,0.6)',
            
          }}
        >
          {/* Formulário */}
          <Box
            
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              // console.log("Alguém submeteu o form");
              // roteamento.push('/chat?username=' + username);
              roteamento.push(`/chat?username=${username}`);
              
              // window.location.href = '/chat';
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Titulo tag="h2">Bem vindo de volta!
            </Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[400],
                fontFamily:'montserrat, cursive',
                fontSize:'20px'
              }}
            >
              {appConfig.name}
            </Text>
            {/* <input
                            type="text"
                            value={username}
                            onChange={function (event) {
                                console.log('usuario digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                // Trocar o valor da variavel
                                // através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
            <TextField
              value={username}
              onChange={function (event) {
                console.log("usuario digitou", event.target.value);
                // Onde ta o valor?
                const valor = event.target.value;
                // Trocar o valor da variavel
                // através do React e avise quem precisa
                setUsername(valor);
                
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[500],
                  mainColor: appConfig.theme.colors.neutrals[800],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: 'rgba(0,0,0,0.5)',
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}
          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: 'rgba(0,0,0,0.3)',
              border: "0",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "20px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: "50%",
                marginBottom: "16px",
                
              }}
                src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: 'rgba(0,0,0,0.8)',
                fontSize:'15px',
                fontFamily:'montserrat, cursive',
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
