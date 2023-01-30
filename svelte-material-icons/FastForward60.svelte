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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11.5 3C6.8 3 2.9 6 1.5 10.2L3.9 11C4.9 7.8 8 5.5 11.5 5.5C13.5 5.5 15.2 6.2 16.6 7.4L14 10H21V3L18.4 5.6C16.5 4 14.1 3 11.5 3M19 14V20C19 21.1 18.1 22 17 22H15C13.9 22 13 21.1 13 20V14C13 12.9 13.9 12 15 12H17C18.1 12 19 12.9 19 14M15 14V20H17V14H15M7 12C5.9 12 5 12.9 5 14V20C5 21.1 5.9 22 7 22H9C10.1 22 11 21.1 11 20V18C11 16.9 10.1 16 9 16H7V14H11V12H7M7 18H9V20H7V18Z" fill="{color}"/></svg>