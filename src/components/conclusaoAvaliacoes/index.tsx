import { Item, BoxImg, Main, Itens, TitleFinal, Title } from "./styles";
import uso from '../../assets/logos/uso geral meuIF.png' 

export function ConclusaoAvaliacoes() {
    return (
            
        <Main>

        <Itens>
            <div>
                <Title>Conclusão do Teste</Title>

                <TitleFinal>Com base nos resultados do teste de usabilidade, observamos uma receptividade positiva dos estudantes e líderes de sala em relação às funcionalidades do aplicativo, evidenciando sua praticidade e eficácia no contexto da instituição. Esses insights fornecem uma perspectiva valiosa para o aprimoramento contínuo da experiência dos usuários.</TitleFinal>

            </div>
        
            <Item>
                <h3>Uso Geral MeuIF</h3>
                <BoxImg>
                    <img src={uso} alt="GitHub Logo" />
                </BoxImg>
                <p>Com a última pergunta: "Quão satisfeito você está com a experiência geral de uso do MeuIF?", os resultados foram apresentados no gráfico acima, sendo de grande relevância tanto para o projeto quanto para nós, desenvolvedores.</p>
            </Item>
        </Itens>

        
        
    </Main>
       
    );
}