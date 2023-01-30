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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 11H10V9H12V11M14 11H16V9H14V11M13.4 21H12V17.5H10V21H4V3H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V1H2V23H14.5C14 22.4 13.6 21.7 13.4 21M14 7H16V5H14V7M16 13.8V13H14V15H14.5C15 14.5 15.5 14.1 16 13.8M8 5H6V7H8V5M8 9H6V11H8V9M6 19H8V17H6V19M12 5H10V7H12V5M10 15H12V13H10V15M8 13H6V15H8V13M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" fill="{color}"/></svg>