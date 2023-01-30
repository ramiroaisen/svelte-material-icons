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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2.38,1.73L1.11,3L5,6.89V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V20.89L20.84,22.73L22.11,21.46M17,19H7V8.89L17,18.89V19M17,5V13.8L19,15.8V3A2,2 0 0,0 17,1H7C6.28,1 5.6,1.37 5.24,2L8.24,5H17Z" fill="{color}"/></svg>