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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18.15 14.96L9.95 18.65L5.85 9.65C7.21 9.13 8.12 7.82 8.15 6.36C8.14 5 7.36 3.76 6.15 3.15C6.54 2.8 7 2.5 7.45 2.25C9.71 1.25 12.37 2.23 13.45 4.46M13.15 18.36L14.75 21.86L17.45 20.65L15.85 17.15" fill="{color}"/></svg>