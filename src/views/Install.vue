<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
export default {
  data() {
    return {
      windowsInstallerURL: "",
      osxInstallerURL: "",
      linuxInstallerURL: "",
      sourceInstallerURL: ""
    };
  },
  created() {
    this.fetchLatestInstallerURL();
  },
  methods: {
    async fetchLatestInstallerURL(): Promise<void> {
      fetch("https://api.github.com/repos/cosmo-lang/cosmo-installer/releases/latest")
        .then(response => response.json())
        .then(data => {
          const baseURL = `https://github.com/cosmo-lang/cosmo-installer/releases/download/${data.tag_name}/CosmoInstaller_`;
          this.windowsInstallerURL = baseURL + "Windows.zip";
          this.osxInstallerURL = baseURL + "OSX.zip";
          this.linuxInstallerURL = baseURL + "Linux.zip";
          this.sourceInstallerURL = "https://codeload.github.com/cosmo-lang/cosmo/zip/refs/tags/" + data.tag_name;
        });
    }
  }
};
</script>

<template>
  <h1 class="bright title push-down-much">Install</h1>
  <br/>
  <h2 class="description-body">You can install Cosmo via the official Cosmo Installer.</h2>

  <div id="main-button-list">
		<ul>
      <a :href="windowsInstallerURL">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="36" height="36" src="https://img.icons8.com/color/48/windows-10.png" alt="windows-10"/>
        </button>
			</a>
      <a :href="osxInstallerURL">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="36" height="36" src="https://img.icons8.com/color/48/000000/mac-os--v1.png" alt="mac-os--v1"/>
        </button>
			</a>
      <a :href="linuxInstallerURL">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="36" height="36" src="https://img.icons8.com/color/48/000000/linux--v1.png" alt="linux--v1"/>
        </button>
			</a>
    </ul>
  </div>

  <h2 style="font-weight: 700;" class="description-body">OR</h2>
  <div id="main-button-list">
		<ul>
      <a :href="sourceInstallerURL">
				<button style="border-radius: 25%;" class="main-button no-border">
          <img width="36" height="36" src="https://img.icons8.com/color/48/000000/git.png" alt="git"/>
        </button>
			</a>
    </ul>
  </div>
</template>