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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 10L11 6H8V2H6V6H3L7 10M17 10L13 6H16V2H18V6H21L17 10M7 12H17C18.11 12 19 12.9 19 14V20C19 21.11 18.11 22 17 22H7C5.9 22 5 21.11 5 20V14C5 12.9 5.9 12 7 12M7 14V20H17V14H7Z" fill="{color}"/></svg>