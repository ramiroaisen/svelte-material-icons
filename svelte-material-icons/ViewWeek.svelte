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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13,5H10A1,1 0 0,0 9,6V18A1,1 0 0,0 10,19H13A1,1 0 0,0 14,18V6A1,1 0 0,0 13,5M20,5H17A1,1 0 0,0 16,6V18A1,1 0 0,0 17,19H20A1,1 0 0,0 21,18V6A1,1 0 0,0 20,5M6,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H6A1,1 0 0,0 7,18V6A1,1 0 0,0 6,5Z" fill="{color}"/></svg>