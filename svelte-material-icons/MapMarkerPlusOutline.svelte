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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 17H18V14H20V17H23V19H20V22H18V19H15V17M9 6.5C10.4 6.5 11.5 7.6 11.5 9S10.4 11.5 9 11.5 6.5 10.4 6.5 9 7.6 6.5 9 6.5M9 2C12.9 2 16 5.1 16 9C16 14.2 9 22 9 22S2 14.2 2 9C2 5.1 5.1 2 9 2M9 4C6.2 4 4 6.2 4 9C4 10 4 12 9 18.7C14 12 14 10 14 9C14 6.2 11.8 4 9 4Z" fill="{color}"/></svg>