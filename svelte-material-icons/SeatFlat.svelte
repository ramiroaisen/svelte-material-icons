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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,11V13H9V7H18A4,4 0 0,1 22,11M2,14V16H8V18H16V16H22V14M7.14,12.1C8.3,10.91 8.28,9 7.1,7.86C5.91,6.7 4,6.72 2.86,7.9C1.7,9.09 1.72,11 2.9,12.14C4.09,13.3 6,13.28 7.14,12.1Z" fill="{color}"/></svg>