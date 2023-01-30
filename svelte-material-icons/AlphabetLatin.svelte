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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13 6V18H15V17.31C15.37 17.73 15.9 18 16.5 18H17C18.65 18 20 16.65 20 15V12C20 10.36 18.65 9 17 9H16.5C15.9 9 15.37 9.27 15 9.7V6M5 9V11H8C8.57 11 9 11.43 9 12H7C5.36 12 4 13.36 4 15C4 16.65 5.36 18 7 18H11V12C11 10.36 9.65 9 8 9M16 11H17C17.57 11 18 11.43 18 12V15C18 15.57 17.57 16 17 16H16C15.43 16 15 15.57 15 15V12C15 11.43 15.43 11 16 11M7 14H9V16H7C6.43 16 6 15.57 6 15C6 14.43 6.43 14 7 14Z" fill="{color}"/></svg>