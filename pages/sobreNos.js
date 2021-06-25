import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Hero.module.scss';
import Link from 'next/link';

export default function SobreNos() {
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

      <main class={`hero-sbn`}>
        <div class={`overlay`}>
          <div class={`title-group`}>
            <h2 class={`title`}>A CAES</h2>
            <h3 class={`subtitle`}>Chapa Acadêmica Ester Sabino</h3>
          </div>
          <div class={`button-group`}>
            <button class={`button-prop`}>
              <Link href='/propostas'>
                <a class={`prop-link`}>PROPOSTAS</a>
              </Link>
            </button>
            <button class={`button-sbn`}>
              <Link href='/sobreNos'>
                <a class={`sbn-link`}>Sobre nós</a>
              </Link>
            </button>
          </div>
        </div>
        <div class={`image`}></div>
      </main>

      <div class={`art-sbn-group`}>
        <article class={`art-1`}>
          <div class={`art-img chapa`}></div>
          <div class={`text-group`}>
            <h2 class={`art-title`}>A Chapa</h2>
            <h3 class={`art-subtitle`}>Nossos valores</h3>
            <p class={`art-text`}>
              A <span class={`bold`}>Chapa Acadêmica Ester Sabino</span> surge
              como a união de estudantes que desejam realizar o melhor possível
              pelo curso de Física. Priorizamos a escolha de um nome feminino
              por representatividade, já que até o momentos só tivemos nomes
              masculinos. O nome Ester Sabino foi escolhido como homenagem a
              brasileira professora/pesquisadora/médica que sequenciou o covid
              em dois dias. Entre as nossas prioridades, enquanto chapa,
              destacamos o nosso desejo imenso de estabelecer com os estudantes
              e colegas um contato de forma mais abrangente, próxima e íntima. É
              nosso desejo também, que esse contato perpasse a esfera
              estudante-estudante e se estenda a esfera estudante-professor.
              Entedemos como primordial para um bom processo de
              ensino-aprendizagem que os docentes e discentes estejam unidos e
              engajados em um só objetivo. Infelizmente a pandemia acobou por
              nos separar físicamente e, com isso, perdemos o calor humano e as
              relações interpessoais e afetivas que são construidas e
              consolidadas no dia a dia em sala de aula. Tendo em mente esse
              fato, trabalharemos para que ocorram momentos de aproximação,
              vitual por hora, para que mesmo que estejamos distantes, estejamos
              proximos. Assim ninguém se sente sozinho e um ajuda ao outro.
            </p>
          </div>
        </article>

        <article class={`art-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Natasha Oliveira</h2>
            <h3 class={`art-subtitle`}>Presidente</h3>
            <p class={`art-text`}>
              Bem eclética quando se trata de música, vai de Barões da Pisadinha
              a Imagine Dragos. Tem 25 anos, ingressou no IFES na turma 2020/1,
              é líder de sua turma e está no PIBID. Estudou Engenharia Civil,
              mas optou pela mudança de curso por perceber seu gosto pela
              Física. Agora, sente que se encontrou. Como Presidente, espera que
              junto à chapa possa, principalmente nesse momento de atividades
              remotas, deixar tudo menos frio para os estudantes e professores,
              que mesmo um contato virtual possa ser caloroso, que possa
              construir algo agradável a todos e que os atenda. &#34;Todos nós
              temos sentido nossas dificuldades no quadro atual, mas ninguém
              está sozinho, estamos aqui para pegar na mão de todos e
              caminharmos juntos.&#34;
            </p>
          </div>
          <div class={`art-img natasha`}></div>
        </article>
      </div>

      <div class={`art-sbn-group`}>
        <article class={`art-1`}>
          <div class={`art-img arthur`}></div>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Arthur</h2>
            <h3 class={`art-subtitle`}>Vice presidente</h3>
            <p class={`art-text`}>
              Tem 21 anos, é estudante do curso de Física desde 2020. Bem
              eclético em relação à música, embora prefira RAP, ama surfar e
              viajar. Como Vice-Presidente do CAWS, pretende, junto a Natasha,
              desenvolver melhorias para o curso, tentando tornar as atividades
              remotas mais prazerosas e aprimorando, cada vez mais, o centro
              acadêmico. Espera suprir às expectativas de todos.
            </p>
          </div>
        </article>

        <article class={`art-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Gabriel Galeano</h2>
            <h3 class={`art-subtitle`}>Diretor de Comunicação</h3>
            <p class={`art-text`}>
              Aluno de física da turma de 2017, com especialização na área de
              instrumentação científica, espectroscopia e divulgação científica.
              Membro ativo da chapa anterior do Caws, onde foi responsável pela
              comunicação geral, pelas recepções dos calouros entre outras
              atividades. Conhecido por ser Nerd, gostar de assuntos como
              quadrinhos, ficção científica, livros, animes, mangás, filmes,
              séries e cultura pop em geral. Tem o gosto musical mais voltado
              para o Pop, Rock, RAP e com um fraco por grupos a capela. Tem o
              costume de entrar em todo e qualquer grupo possível.
            </p>
          </div>
          <div class={`art-img galeano`}></div>
        </article>
      </div>

      <div class={`art-sbn-group`}>
        <article class={`art-1`}>
          <div class={`art-img mauricio`}></div>
          <div class={`text-group mau`}>
            <h2 class={`art-title`}>Maurício Matos</h2>
            <h3 class={`art-subtitle`}>
              1º Secretário de Comunicação e Representante do Bacharelado
            </h3>
            <p class={`art-text`}>
              Licenciado em Física pelo Ifes, pautou sua jornada acadêmica na
              pesquisa em Ensino de Física com enfase na Prática e Inovação em
              Ensino. Foi bolsista do Programa Institucional de Iniciação a
              Docência e residente do Programa Residência Pedagógica. Atuou como
              Monitor do Loboratório de Instrumentação para o Ensino de Física -
              Pibid, além de ter atuado como Monitor das disciplinas de
              Geometria Analítica e Fundamentos da Matemática Elementar. Foi
              bolsista do Programa de Formação da Sedu por dois anos, atuando em
              sala de aula e laboratórios de escola da rede estadual de ensino,
              bem como nos ambitos de gestão administrativa e pedagógica dessas
              instituições. Membro ativo da gestão anterior na função de
              secretário geral. Atualmente é estudante do Curso de Bacharelado
              em Física, monitor do Laboratório Pibid e Professor da rede
              estadual de ensino.
            </p>
          </div>
        </article>

        <article class={`art-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Felipe Penha</h2>
            <h3 class={`art-subtitle`}>2º Secretário de Comunicação</h3>
            <p class={`art-text`}>
              Tem 24 anos, ingressou no IFES na turma 2017/1. Gosta de livros,
              jogos, esportes, arte e música, vai da clássica à eletrônica, com
              paradas na MPB e no Indie. Foi mediador na Escola da
              Ciência-Física, foi bolsista do PIBID, foi estagiário da SEDU,
              está na Residência Pedagógica e estuda programação e modelagem 3D.
              Como membro do CAWS, espera aproximar discentes e docentes, mesmo
              sob o regime de ativades remotas, abastecendo-os de informação e
              acesso a recursos digitais.
            </p>
          </div>

          <div class={`art-img felipe`}></div>
        </article>
      </div>

      <div class={`art-sbn-group`}>
        <article class={`art-1`}>
          <div class={`art-img patrick`}></div>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Patrick Cardoso</h2>
            <h3 class={`art-subtitle`}>Secretário Geral</h3>
            <p class={`art-text`}>
              Licenciando em Física pelo IFES, participou do projeto de extensão
              do IFES pela Praça da Ciência, estagiou na Prefeitura de Vila
              Velha como auxiliar de professor em programação no projeto
              Robótica, desde sua entrada no IFES, até os dias atuais, fez parte
              do Show de Física, agindo nos bastidores como fotógrafo, e tem a
              fotografia como seu principal hobby. Atualmente é bolsista do
              Programa Institucional de Bolsa de Iniciação a Docência.
            </p>
          </div>
        </article>

        <article class={`art-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Maria Alice</h2>
            <h3 class={`art-subtitle`}>Vice da Secretaria Geral</h3>
            <p class={`art-text`}>
              Estudante da turma 2020/1, descobriu o seu interesse pela Física
              graças a uma Iniciação Científica que fez durante o ensino médio,
              desde então, sua paixão pela Física só cresceu. Tem gosto musical
              bem variado, mas ouve, principalmente, MPB, Samba e Rock, ama
              assistir filmes de ficção científica, fantasia, terror e
              animações. Em seu tempo livre, gosta muito de cantar, jogar jogos
              eletrônicos, ir ao cinema, ouvir podcast e se reunir com os seus
              amigos.
            </p>
          </div>
          <div class={`art-img alice`}></div>
        </article>
      </div>

      <div class={`art-sbn-group`}>
        <article class={`art-1`}>
          <div class={`art-img ivo`}></div>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Ivo Amorim</h2>
            <h3 class={`art-subtitle`}>Tesoureiro</h3>
            <p class={`art-text`}>
              Tem 27 anos, é eclético, mas prefere músicas fundo de poço, gosta
              de jogar, assistir a vídeos, séries, ler histórias em quadrinhos,
              sair com os amigos e conversar. O que o fez escolher o curso de
              Física foi o exemplo de sua ex-professora de Física Aline Gama,
              Ifes-Vitória. Como Tesoureiro, pretende manter a transparência e a
              serenidade do setor financeiro do CAWS, ajudando ao máximo em tudo
              o que puder.
            </p>
          </div>
        </article>

        <article class={`art-2`}>
          <div class={`text-group`}>
            <h2 class={`art-title`}>Julya Vieira</h2>
            <h3 class={`art-subtitle`}>Vice da Tesouraria</h3>
            <p class={`art-text`}>
              Sempre sonhou em dar aula desde criança e este sempre foi o seu
              sonho. A escolha do curso não foi muito difícil, já que sempre
              gostou muito de física e possui afinidade. Nas horas livres,
              costuma desenhar e ouvir música ou assistir a uma série, tem gosto
              musical bem eclético e gosta muito de séries e filmes de fantasia.
              Um de seus hobbies é a maquiagem, tanto que é maquiadora nas horas
              livres.
            </p>
          </div>
          <div class={`art-img julya`}></div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
