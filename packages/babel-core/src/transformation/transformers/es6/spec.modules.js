import * as t from "babel-types";

export var metadata = {
  group: "builtin-pre",
  optional: true
};

export var visitor = {
  Program() {
    var id = this.scope.generateUidIdentifier("null");
    this.unshiftContainer("body", [
      t.variableDeclaration("var", [
        t.variableDeclarator(id, t.nullLiteral())
      ]),
      t.exportNamedDeclaration(null, [
        t.exportSpecifier(id, t.identifier("__proto__"))
      ])
    ]);
  }
};