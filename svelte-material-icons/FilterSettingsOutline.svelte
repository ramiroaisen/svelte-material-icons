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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 22H17V24H15M11 22H13V24H11M7 22H9V24H7M15 19.88C15.04 20.18 14.94 20.5 14.71 20.71C14.32 21.1 13.69 21.1 13.3 20.71L9.29 16.7C9.06 16.47 8.96 16.16 9 15.87V10.75L4.21 4.62C3.87 4.19 3.95 3.56 4.38 3.22C4.57 3.08 4.78 3 5 3H19C19.22 3 19.43 3.08 19.62 3.22C20.05 3.56 20.13 4.19 19.79 4.62L15 10.75V19.88M7.04 5L11 10.06V15.58L13 17.58V10.05L16.96 5Z" fill="{color}"/></svg>