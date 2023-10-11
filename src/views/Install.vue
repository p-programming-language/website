<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
export default {
  // data() {
  //   return {
  //     windowsInstallerURL: "",
  //     osxInstallerURL: "",
  //     linuxInstallerURL: ""
  //   };
  // },
  // created() {
  //   this.fetchLatestInstallerURL();
  // },
  // methods: {
  //   async fetchLatestInstallerURL(): Promise<void> {
  //     fetch("https://api.github.com/repos/cosmo-lang/cosmo-installer/releases/latest")
  //       .then(response => response.json())
  //       .then(data => {
  //         const baseURL = `https://github.com/cosmo-lang/cosmo-installer/releases/download/${data.tag_name}/CosmoInstaller_`;
  //         this.windowsInstallerURL = baseURL + "Windows.zip";
  //         this.osxInstallerURL = baseURL + "OSX.zip";
  //         this.linuxInstallerURL = baseURL + "Linux.zip";
  //       });
  //   }
  // }
};
</script>

<template>
  <h1 class="bright title push-down-much">Install</h1>
  <br/>
  <h2 class="description-body">You can install P via the source code and NPM.</h2>
  <div id="main-button-list">
		<ul>
      <a href="https://github.com/p-programming-language/plang/archive/refs/heads/main.zip">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="48" height="48" src="https://img.icons8.com/color/48/000000/git.png" alt="git"/>
        </button>
			</a>
    </ul>
  </div>
</template>