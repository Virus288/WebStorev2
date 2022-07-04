import { toggleNav } from '../utils';

export default function Navbar(): JSX.Element {
  return (
    <>
      <div id="navbar">
        <div>
          <button>Button1</button>
          <button>Button2</button>
          <button>Button3</button>
        </div>
        <div>
          <button>Button4</button>
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
