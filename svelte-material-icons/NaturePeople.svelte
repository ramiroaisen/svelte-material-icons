<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4.5,11A1.5,1.5 0 0,0 6,9.5A1.5,1.5 0 0,0 4.5,8A1.5,1.5 0 0,0 3,9.5A1.5,1.5 0 0,0 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17A7,7 0 0,0 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13A1,1 0 0,0 6,12H3A1,1 0 0,0 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z" fill="{color}"/></svg>