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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19.5,12.8V22H14.7V13.9C14.7,13.2 14.1,12.6 13.4,12.6H10.5C9.8,12.6 9.2,13.2 9.2,13.9V22H4.5V2H9.3V8.4C9.6,8.3 9.9,8.2 10.2,8.2H15C17.5,8.2 19.5,10.3 19.5,12.8Z" fill="{color}"/></svg>