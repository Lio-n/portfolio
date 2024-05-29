<script lang="ts">
  import './app.css';
  import Layout from './components/layout.component.svelte';
  import HomeSection from './components/sections/home.section.svelte';
  import ProyectsSection from './components/sections/proyects.section.svelte';
  import ToolsAndSkills from './components/sections/tools-and-skills.section.svelte';
</script>

<Layout>
  <main>
    <HomeSection />
    <ProyectsSection />
    <ToolsAndSkills />
  </main>
</Layout>

<style>
</style>
