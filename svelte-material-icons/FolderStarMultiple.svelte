<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 6H0V20C0 21.11 .895 22 2 22H20V20H2V6M22 4H14L12 2H6C4.89 2 4 2.89 4 4V16C4 17.1 4.89 18 6 18H22C23.11 18 24 17.1 24 16V6C24 4.89 23.11 4 22 4M19.94 15L17 13.27L14.06 15L14.84 11.66L12.25 9.42L15.66 9.13L17 6L18.34 9.13L21.75 9.42L19.16 11.66L19.94 15Z" fill="{color}"/></svg>