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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11 17C11 17 11.3 19 9 22H15C12.7 19 13 17 13 17S14 18 16 18 20 16 20 14C20 9 15 7 12 2C9 7 4 9 4 14C4 16 6 18 8 18S11 17 11 17M13 14H11C11 14 10 16 8 16C7.1 16 6 14.9 6 14C5.8 11 9.9 8.2 12 5.4C14.1 8.1 18.2 10.9 18 14C18 14.9 16.9 16 16 16C14 16 13 14 13 14Z" fill="{color}"/></svg>