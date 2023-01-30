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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 7V14H4V7H2M6 7V9H10V11H8V14H10V13C11.11 13 12 12.11 12 11V9C12 7.89 11.11 7 10 7H6M15.8 7L15.6 9H14V11H15.4L15.2 13H14V15H15L14.8 17H16.8L17 15H18.4L18.2 17H20.2L20.4 15H22V13H20.6L20.8 11H22V9H21L21.2 7H19.2L19 9H17.6L17.8 7H15.8M17.4 11H18.8L18.6 13H17.2L17.4 11M2 15V17H4V15H2M8 15V17H10V15H8Z" fill="{color}"/></svg>