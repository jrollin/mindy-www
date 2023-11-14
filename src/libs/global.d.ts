// union type tips
// Pick: required field
// Partial : Make all others field optional
//
// ex:
// type drafttask = requiredonly<task, "title">
// type drafttask = requiredonly<task, "title" | "otherfield">
//
type RequiredOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;
