<script lang="ts">
  import AtomicDesignLogo from '../assets/logos/atomic-design.svg';
  import JavaScriptLogo from '../assets/logos/js.svg';
  import AxiosLogo from '../assets/logos/axios.svg';
  import Css3Logo from '../assets/logos/css3.svg';
  import FigmaLogo from '../assets/logos/figma.svg';
  import FirebaseLogo from '../assets/logos/firebase.svg';
  import GithubLogo from '../assets/logos/github.svg';
  import NextJsLogo from '../assets/logos/nextjs2.svg';
  import NodeJsLogo from '../assets/logos/nodejs.svg';
  import NpmLogo from '../assets/logos/npm2.svg';
  import PostgresqlLogo from '../assets/logos/postgresql.svg';
  import ReactJsLogo from '../assets/logos/reactjs.svg';
  import GitLogo from '../assets/logos/git.svg';
  import SvelteLogo from '../assets/logos/sveltejs.svg';
  import TypescriptLogo from '../assets/logos/typescript.svg';
  import TailwindCssLogo from '../assets/logos/tailwindcss.svg';
  import ViteJsLogo from '../assets/logos/vitejs.svg';
  import VsCodeLogo from '../assets/logos/vscode.svg';
  import HtmlLogo from '../assets/logos/html5.svg';

  const logos = [
    null,
    null,
    AxiosLogo,
    FirebaseLogo,
    JavaScriptLogo,
    null,
    Css3Logo,
    FigmaLogo,
    NodeJsLogo,
    ViteJsLogo,

    NpmLogo,
    HtmlLogo,
    VsCodeLogo,
    ReactJsLogo,
    TypescriptLogo,
    GithubLogo,

    GitLogo,
    SvelteLogo,
    PostgresqlLogo,
    null,
    AtomicDesignLogo,
    NextJsLogo,

    TailwindCssLogo,
    null,
    null,
  ];
</script>

{#each logos as _, i}
  {#if _}
    <img src={_} alt="logo" aria-hidden="true" class="object-contain size-12" />
  {:else}
    <div class="size-12" />
  {/if}
{/each}
