import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <nav class={`nav-bar`}>
      <h1 class={`logo`}>
        <Link href='/'>
          <a class={`rainbow`}>CAES</a>
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
    </nav>
  );
};

export default Header;
