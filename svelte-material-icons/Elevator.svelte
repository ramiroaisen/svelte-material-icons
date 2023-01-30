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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,2L11,6H8V10H6V6H3L7,2M17,10L13,6H16V2H18V6H21L17,10M7,12H17A2,2 0 0,1 19,14V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V14A2,2 0 0,1 7,12M7,14V20H17V14H7Z" fill="{color}"/></svg>