import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Hero.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={`container`}>
      <Head>
        <meta name='description' content='CHAPA ACADÊMICA ESTER SABINO' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
        <title>CAES</title>
      </Head>
      <Header />

      <main class={`hero`}>
        <div class={`overlay`}>
          <div class={`title-group`}>
            <h2 class={`title`}>Eleições CA</h2>
            <h3 class={`subtitle`}>Eleições para o Centro Acadêmico</h3>
          </div>
          <div class={`button-group`}>
            <button class={`button-prop`}>
              <Link href='/propostas'>
                <a>PROPOSTAS</a>
              </Link>
            </button>
            <button class={`button-sbn`}>
              <Link href='/sobreNos'>
                <a>Sobre nós</a>
              </Link>
            </button>
          </div>
        </div>
      </main>

      <div class={`grid-index`}>
        {/* <article class={`art-index-1`}>
          <div class={`art-img caws`}></div>
          <div class={`text-group`}>
            <h2 class={`art-title`}>O que é o CAWS</h2>
            <p class={`art-text`}>
              Texto informativo sobre o que é o CAWS e sua importância. Um texto
              grande o suficiente para chegar até o pé da imagem, no máximo. Ou
              para ficar centralizado bonitinho. Foto do CAWS ou do campus?
              Texto informativo sobre o que é o CAWS e sua importância. Um texto
              grande o suficiente para chegar até o pé da imagem, no máximo. Ou
              para ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
              informativo sobre o que é o CAWS e sua importância. Um texto
              grande o suficiente para chegar até o pé da imagem, no máximo. Ou
              para ficar centralizado bonitinho. Foto do CAWS ou do campus?
            </p>
          </div>
        </article> */}

        <article class={`art-index-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>O CAWS</h2>
            <div class={`art-text-group`}>
              <p class={`art-text-1`}>
                O Centro Acadêmico “Wesley Spalenza”, representante dos cursos
                de Licenciatura e Bacharelado em Física do Ifes - campus
                Cariacica perante a comunidade e no movimento estudantil, é o
                fruto de mobilizações estudantis desde que o curso de
                Licenciatura foi criado, em 2011, visando organizar-se para
                consolidar as demandas dos alunos e trabalhar por um curso
                democrático e com identidade forte.
              </p>
              <p class={`art-text-2`}>
                Uma primeira tentativa de estrutura formal foi iniciada em 2015,
                porém não seguiu adiante. Ao final de 2016, há um processo de
                reestruturação do Centro Acadêmico.
              </p>
              <p class={`art-text-3`}>
                Em 2017, elege-se uma nova direção para a instituição, direção
                esta presidida pelos discentes Carlos Ivan Falcão Fehlberg e
                Bernado Pessin Moreira. Com a consolidação da gestão
                Carlos-Bernardo muitas conquistas são alcançadas, dentre elas o
                aumento da participação ativa dos estudantes nas atividades do
                campus e do curso, a conquista de um espaço para o Centro
                Acadêmico, hoje sua sede, começa a construção da identidade do
                curso através de produtos e integração e comunicação entre os
                alunos. Ainda na gestão Carlos-Bernardo temos o CaWS
                protagonizando organização de eventos, lutando por causas
                sociais apoiando projetos de extensão (GACS) e consolidando o
                espaço físico do centro acadêmico com um espaço plural, diverso
                e de vivência para os estudantes da Física.
              </p>
              <p class={`art-text-4`}>
                Em setembro de 2018, finda-se a gestão Carlos-Bernado e, por
                meio de processo eleitoral democrático, elege-se uma nova
                diretoria que veio a gerir o CaWS até os dia de hoje (06/2021).
                A direção que se inicia em 2018 é presidida pelos discentes
                Saulo Gomes dos Santos Vilar e Hellen Kássia de Oliveira Costa.
                A gestão Hellen-Saulo se inicia dando continuidade às ações
                iniciadas na era Carlos-Bernardo. Prossegue-se realizando
                eventos para interação dos estudantes, lutando por uma educação
                pública, gratuita e de qualidade. O momento político que a
                gestão Hellen-Saulo enfrenta é conturbado, cortes na educação,
                polarização política, estudantes atingidos direta e
                indiretamente pelas políticas publicas, as percepções dos
                estudantes dos impactos dos cortes dentre outros assuntos que
                acabaram por agitar a gestão. O CAWS não se absteve e foi a
                luta, apoiou e participou de protestos pela educação, incentivou
                e ouviu os estudantes e seus pontos de vista, enfim, atuou
                dentro de suas competências. Mas a gestão Hellen-Saulo estava
                longe de ter encerrado sua participação, quando iniciou-se o
                processo para a eleição de uma nova chapa no início de 2020, a
                OMS declara a Pandemia do Corana Vírus, e apartir dai inicia-se
                a gestão interina desta direção. A gestão Hellen-Saulo se aliou
                à coordenadoria do curso e à direção do campus na composição de
                estratégias de enfrentamento a pandemia, tal aliança se deu por
                meio de um Comitê Emergencial de Crise. Este comitê se dedicou a
                manter um diálogo direto e franco com os estudantes do curso.
                Durante o período pandemico, as ações foram restritas a este
                âmbito. Agora em 06/2021 a gestão Hellen-Saulo se prepapra para
                passar a direção desta instituição para uma nova gestão.
              </p>
            </div>
          </div>
          <div class={`art-img eleicoes`}></div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
