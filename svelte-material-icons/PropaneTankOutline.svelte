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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 6.14V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V6.14C5.28 6.59 4 8.14 4 10V18C4 20.21 5.79 22 8 22H16C18.21 22 20 20.21 20 18V10C20 8.14 18.72 6.59 17 6.14M9 4H15V6H13C13 5.45 12.55 5 12 5S11 5.45 11 6H9V4M8 8H16C17.1 8 18 8.9 18 10V13H6V10C6 8.9 6.9 8 8 8M16 20H8C6.9 20 6 19.1 6 18V15H18V18C18 19.1 17.1 20 16 20Z" fill="{color}"/></svg>