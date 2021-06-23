import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer class={`footer`}>
      <h1 class={`logo`}>
        <Link href='/'>
          <a>CAES</a>
        </Link>
      </h1>
      <div class={`button-group`}>
        <button class={`button-sbn`}>
          <Link href='/sobreNos'>
            <a>Sobre nós</a>
          </Link>
        </button>
        <button class={`button-prop`}>
          <Link href='/propostas'>
            <a>PROPOSTAS</a>
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
