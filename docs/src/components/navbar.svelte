<script lang="ts">
  import Link from "./link.svelte"
  import Github from "./svg/github.svelte"
  import { Icon } from "@magicons/core"
  import { vault } from "$lib/vault.svelte"
</script>

<nav
  class="
    flex items-center h-14 justify-between w-full bg-gray-900/80 backdrop-blur-xs border-gray-600 z-40
    sm:sticky sm:top-0 fixed bottom-0 px-6
    sm:border-b-[1px] sm:border-t-0 border-t-[1px]
  "
>
  <Link href="/" class="font-bold text-2xl text-white">KAVI</Link>
  <span class="flex gap-5 text-gray-200 items-center">
    <a class="hover:text-white transition-all size-6" href="https://github.com/propolies/kavi">
      <Github />
    </a>
    <button
      onclick={(e) => {
        e.preventDefault()
        vault.showVault = !vault.showVault
      }}
      class="hover:text-white sm:hidden block"
    >
      <Icon src={vault.showVault ? "@lucide-X" : "@lucide-Menu"} class="size-7" />
    </button>
  </span>
</nav>
