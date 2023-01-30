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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.6 12H2V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H15.6M20 15C20 17.8 17.8 20 15 20H9C6.2 20 4 17.8 4 15V14H20V15M16.2 11L20.3 4.4L22 5.5L18.6 11H16.2Z" fill="{color}"/></svg>