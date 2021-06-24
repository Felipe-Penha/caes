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
        <meta name='description' content='Generated by create next app' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
        <title>CAES</title>
      </Head>
      <Header />

      <main class={`hero-prop`}>
        <div class={`overlay`}>
          <div class={`title-group`}>
            <h2 class={`title`}>Nosso futuro</h2>
            <h3 class={`subtitle`}>Veja as nossas propostas para o CA</h3>
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
        <div class={`image`}></div>
      </main>

      <div class={`art-prop-group`}>
        <article class={`art-prop-1`}>
          <div class={`text-prop-group`}>
            <h2 class={`art-title`}>Finanças</h2>
            <p class={`art-text`}>
              Movimentar a área financeira do centro acadêmico, colocando ideias
              novas e antigas em prática, para que finalmente tenhamos dinheiro
              pra concluir os projetos que quisermos de forma autônoma.
            </p>
          </div>
        </article>

        <article class={`art-prop-2`}>
          <div class={`text-prop-group`}>
            <h2 class={`art-title`}>Prestação de Contas</h2>
            <p class={`art-text`}>
              Prestação de contas trimestrais: o objetivo é deixar acessível a
              todos vocês o que o CAWS está fazendo e o porquê está fazendo, com
              maior frequência, para diminuir a distância entre o CA e o curso.
            </p>
          </div>
        </article>
      </div>

      <div class={`art-prop-group`}>
        <article class={`art-prop-1`}>
          <div class={`text-prop-group`}>
            <h2 class={`art-title`}>Grupos de estudo</h2>
            <p class={`art-text`}>
              Pretendemos incentivar e ajudar a administrar grupos de estudo
              específicos, sejam eles de matérias específicas ou de amigos.
              Forneceremos ferramentas, auxílio e assistência acessíveis através
              de um canal de comunicação com o líder de cada grupo de estudo.
            </p>
          </div>
        </article>

        <article class={`art-prop-2`}>
          <div class={`text-prop-group`}>
            <h2 class={`art-title`}>Clube do CAWS</h2>
            <p class={`art-text`}>
              De forma semelhante aos grupos de estudo, pretendemos incentivar a
              realização de clubes, pensados anteriormente e nunca postos em
              prática. Também, de forma organizada e com o caws à disposição a
              todo momento.
            </p>
          </div>
        </article>
      </div>
      <div class={`art-prop-group`}>
        <article class={`art-prop-1`}>
          <div class={`text-prop-group`}>
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
        </article>

        <article class={`art-prop-2`}>
          <div class={`text-prop-group`}>
            <h2 class={`art-title`}>Site do CAWS</h2>
            <p class={`art-text`}>
              Atualizar, otimizar, movimentar e tornar o site do CAWS mais
              utilizável. A ideia é tornar o nosso site uma espécie de central
              do curso, com todas as informações do CAWS, seção para sugestão de
              pautas, abas com os trabalhos dos estudantes expostos, em posição
              de honra e destaque, abas com revistas, sites e canais de ciência
              e de divulgação científica confiáveis, etc.
            </p>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
