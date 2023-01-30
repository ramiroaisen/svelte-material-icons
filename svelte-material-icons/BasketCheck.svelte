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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.63 16.27L17.76 20.17L16.41 18.8L15 20.22L17.75 23L23.03 17.68L21.63 16.27M13 20C13 16.69 15.69 14 19 14C20 14 20.92 14.24 21.74 14.67L22.96 10.29L23 10C23 9.45 22.55 9 22 9H17.42L12.83 2.44C12.65 2.17 12.34 2 12 2S11.36 2.17 11.18 2.43L6.58 9H2C1.45 9 1 9.45 1 10L1.1 10.44L3.71 19.9C4.04 20.55 4.72 21 5.5 21H13.09C13.04 20.67 13 20.34 13 20M12 4.74L15 9H9L12 4.74M10 15C10 13.9 10.9 13 12 13S14 13.9 14 15 13.11 17 12 17 10 16.11 10 15Z" fill="{color}"/></svg>