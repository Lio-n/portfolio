<script lang="ts">
  import GithubIcon from '../assets/github.svg';
  import LinkedinIcon from '../assets/linkedin.svg';
  import NavContent from './navContent.component.svelte';
  import SideBarManu from './sidebarMenu.component.svelte';
</script>

<header class="relative flex justify-between items-center px-4 py-8">
  <div class="md:hidden">
    <SideBarManu />
  </div>

  <div class="hidden md:block">
    <NavContent class=" md:flex-row md:p-0 gap-8" />
  </div>

  <div class="flex gap-4">
    <a href="https://www.linkedin.com/in/leonardo-fontan/" target="_blank">
      <img src={LinkedinIcon} alt="linkedin-icon" aria-hidden="true" class="size-8" />
    </a>

    <a href="https://github.com/Lio-n" target="_blank">
      <img src={GithubIcon} alt="github-icon" aria-hidden="true" class="size-8 p-1 bg-[#151515] rounded" />
    </a>
  </div>
</header>
