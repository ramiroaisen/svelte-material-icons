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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2,3H10A2,2 0 0,1 12,1A2,2 0 0,1 14,3H22V5H21V16H15.25L17,22H15L13.25,16H10.75L9,22H7L8.75,16H3V5H2V3M5,5V14H19V5H5M11.85,11.85C11.76,11.94 11.64,12 11.5,12A0.5,0.5 0 0,1 11,11.5V7.5A0.5,0.5 0 0,1 11.5,7C11.64,7 11.76,7.06 11.85,7.15L13.25,8.54C13.57,8.86 13.89,9.18 13.89,9.5C13.89,9.82 13.57,10.14 13.25,10.46L11.85,11.85Z" fill="{color}"/></svg>