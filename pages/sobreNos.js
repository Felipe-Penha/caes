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
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <title>CAES</title>
      </Head>
      <Header />

      <main class={`hero`}>
        <div class={`overlay`}>
          <div class={`title-group`}>
            <h2 class={`title`}>A CAES</h2>
            <h3 class={`subtitle`}>
              Nós somos a chapa mais quente que você já viu
            </h3>
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
        <div class={`image`}>
          <img class={`sbNos`} src={`mug.png`} />
        </div>
      </main>

      <article class={`art-1`}>
        <img class={`art-img chapa`} src={`chapa.png`} />
        <div class={`text-group`}>
          <h2 class={`art-title`}>A Chapa</h2>

          <p class={`art-text`}>
            Talvez alguma coisa sobre a formação da chapa ou algo geral sobre os
            membros ou os nossos valores.
          </p>
        </div>
      </article>

      <article class={`art-2`}>
        <div class={`text-group`}>
          <h2 class={`art-title`}>Natasha Oliveira</h2>
          <h3 class={`art-subtitle`}>Presidente</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
        <img class={`art-img`} src={`natasha.jpeg`} />
      </article>

      <article class={`art-1`}>
        <img class={`art-img`} src={`arthur.jpeg`} />
        <div class={`text-group`}>
          <h2 class={`art-title`}>Arthur</h2>
          <h3 class={`art-subtitle`}>Vice presidente</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
      </article>

      <article class={`art-2`}>
        <div class={`text-group`}>
          <h2 class={`art-title`}>Gabriel Galeano</h2>
          <h3 class={`art-subtitle`}>Diretor de Comunicação</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
        <img class={`art-img`} src={`galeano.jpeg`} />
      </article>

      <article class={`art-1`}>
        <img class={`art-img`} src={`mauricio.jpeg`} />
        <div class={`text-group`}>
          <h2 class={`art-title`}>Maurício Matos</h2>
          <h3 class={`art-subtitle`}>
            1º Secretário de Comunicação e Representante do Bacharelado
          </h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
      </article>

      <article class={`art-2`}>
        <div class={`text-group`}>
          <h2 class={`art-title`}>Felipe Penha</h2>
          <h3 class={`art-subtitle`}>2º Secretário de Comunicação</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>

        <img class={`art-img`} src={`felipe.jpeg`} />
      </article>

      <article class={`art-1`}>
        <img class={`art-img`} src={`patrick.jpeg`} />
        <div class={`text-group`}>
          <h2 class={`art-title`}>Patrick Elias</h2>
          <h3 class={`art-subtitle`}>Secretário Geral</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
      </article>

      <article class={`art-2`}>
        <div class={`text-group`}>
          <h2 class={`art-title`}>Maria Alice</h2>
          <h3 class={`art-subtitle`}>Vice da Secretaria Geral</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
        <img class={`art-img`} src={`alice.jpeg`} />
      </article>

      <article class={`art-1`}>
        <img class={`art-img`} src={`natasha.jpeg`} />
        <div class={`text-group`}>
          <h2 class={`art-title`}>Ivo</h2>
          <h3 class={`art-subtitle`}>Tesoureiro</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
      </article>

      <article class={`art-2`}>
        <div class={`text-group`}>
          <h2 class={`art-title`}>Julya Vieira</h2>
          <h3 class={`art-subtitle`}>Vice da Tesouraria</h3>
          <p class={`art-text`}>
            Texto informativo sobre o que é o CAWS e sua importância. Um texto
            grande o suficiente para chegar até o pé da imagem, no máximo. Ou
            para ficar centralizado bonitinho. Foto do CAWS ou do campus? Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?Texto
            informativo sobre o que é o CAWS e sua importância. Um texto grande
            o suficiente para chegar até o pé da imagem, no máximo. Ou para
            ficar centralizado bonitinho. Foto do CAWS ou do campus?
          </p>
        </div>
        <img class={`art-img`} src={`julya.jpeg`} />
      </article>

      <Footer />
    </div>
  );
}
