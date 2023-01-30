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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 9H7.31L7.63 6H9.63L9.31 9H11.31L11.63 6H13.63L13.31 9H15V11H13.1L12.9 13H15V15H12.69L12.37 18H10.37L10.69 15H8.69L8.37 18H6.37L6.69 15H5V13H6.9L7.1 11H5V9M9.1 11L8.9 13H10.9L11.1 11M19 6H17V14H19M19 16H17V18H19Z" fill="{color}"/></svg>