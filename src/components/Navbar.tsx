import { toggleNav } from '../utils';
import { useEffect } from 'react';

export default function Navbar(): JSX.Element {
  const selectButton = (): void => {
    document.querySelectorAll('button').forEach((bt) => {
      bt.addEventListener('click', (e) => {
        e.preventDefault();
        const activeButton = document.querySelector('.activeButton');
        const target = e.target as HTMLElement;
        if (activeButton) {
          activeButton.classList.toggle('activeButton');
        }
        target.classList.toggle('activeButton');
      });
    });
  };

  useEffect(() => {
    selectButton();
  }, []);

  return (
    <>
      <div id="navbar">
        <div>
          <h1>Capri</h1>
        </div>
        <div>
          <button>Pościele</button>
          <button>Prześcieradła</button>
          <button>Poduszki</button>
          <button>Koce</button>
          <button>Ręczniki</button>
        </div>
        <div>
          <button>Koszyk</button>
          <button>
            <i className="icon-adult navIcon" />
          </button>
        </div>
      </div>
      <div id="navbarToggle" onClick={(): void => toggleNav()}>
        |||
      </div>
    </>
  );
}
