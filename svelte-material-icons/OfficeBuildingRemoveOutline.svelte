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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 11H10V9H12V11M14 11H16V9H14V11M13.4 21H12V17.5H10V21H4V3H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V1H2V23H14.5C14 22.4 13.6 21.7 13.4 21M14 7H16V5H14V7M16 13.8V13H14V15H14.5C15 14.5 15.5 14.1 16 13.8M8 5H6V7H8V5M8 9H6V11H8V9M6 19H8V17H6V19M12 5H10V7H12V5M10 15H12V13H10V15M8 13H6V15H8V13M21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z" fill="{color}"/></svg>