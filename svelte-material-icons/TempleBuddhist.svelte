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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 9C21 10.1 20.1 11 19 11H5C3.9 11 3 10.1 3 9H1C1 10.9 2.3 12.4 4 12.8V22H10V19C10 17.9 10.9 17 12 17S14 17.9 14 19V22H20V12.9C20.5 12.8 23 11.9 23 9H21M6 8.9V10H18V8.9C18.5 8.8 21 7.9 21 5H19C19 6.1 18.1 7 17 7H7C5.9 7 5 6.1 5 5H3C3 6.9 4.3 8.4 6 8.9M12 1L8.2 6H15.7L12 1Z" fill="{color}"/></svg>