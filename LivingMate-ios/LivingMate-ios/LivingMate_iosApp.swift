//
//  LivingMate_iosApp.swift
//  LivingMate-ios
//
//  Created by sionpark on 12/10/23.
//

import SwiftUI

@main
struct LivingMate_iosApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
