import { Main, Itens, TitleFinal, Title, TitleFinal2, Title2, Item } from "./styles";

export function Introducao() {
    return (
            
        <Main>

        <Itens>
            <Item>
                <Title>A evasão escolar</Title>

                <TitleFinal>A evasão escolar é uma problemática complexa, que é caracterizada pelo abandono do discente dos estudos. Essa questão é especialmente preocupante, considerando que aproximadamente 40% dos estudantes do ensino fundamental no Brasil não conseguem prosseguir para o ensino médio (SILVA, 2016, p. 1).
            </TitleFinal>

            </Item>

            <Item>
                <Title2>A tecnologia</Title2>

                <TitleFinal2>A tecnologia hoje em dia afeta todas as pessoas, entre elas estão os estudantes, onde é fundamental utilizar-se dela para auxiliar e até mesmo resolver problemas sociais e educacionais
            </TitleFinal2>

            </Item>
        
            
        </Itens>

        <div>
        <Title2>MeuIF</Title2>

<TitleFinal2>No âmbito do Instituto Federal do Paraná, Campus Cascavel, surgiu a necessidade de desenvolver um software capaz de otimizar tarefas diárias dos alunos e da Seção Pedagógica e de Assuntos Educacionais (SEPAE). Neste contexto, esse trabalho realizou o desenvolvimento do aplicativo MeuIF
</TitleFinal2>
        </div>

        
        
    </Main>
       
    );
}